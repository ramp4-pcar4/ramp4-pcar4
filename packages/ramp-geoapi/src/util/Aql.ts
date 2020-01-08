import sqlParser from 'js-sql-parser';

// AQL classes.  Attribute Query Language is a cheap thing that allows you to evaluate a SQL where style clause
// against an attribute object (i.e. a key-value dictionary). Has limited support for basic query logic
// (can be expanded)

interface Attribute { [x: string]: any; }

// for science. baseclass of all Aql classes. if we have a common property we can add here
class AqlRoot {

    // added 'evaluate' to keep TypeScript happy
    evaluate (attribute?: Attribute): any {
        return;
    }
}

// baseclass for Aql classes that deal with one value
class AqlAtomic extends AqlRoot {
    value: any;

    constructor (val: any) {
        super();

        this.value = val;
    }
}

// baseclass for Aql classes that deal with two values
class AqlDiatomic extends AqlRoot {
    left: any;
    right: any;

    constructor (left: any, right: any) {
        super();

        this.left = left;
        this.right = right;
    }
}

// handles a literal (a constant). a string, a number, a boolean
class AqlLiteral extends AqlAtomic {
    // constructor param is the literal value

    evaluate (): any {
        return this.value;
    }
}

// handles an identifier. the name of an attribute property
class AqlIdentifier extends AqlAtomic {
    // constructor param is the property name of the attribute

    evaluate (attribute: Attribute): any {
        return attribute[this.value];
    }
}

// handles an array of values
class AqlArray extends AqlAtomic {
    // constructor param is the array

    evaluate (): any {
        return this.value;
    }
}

// handles an equals operator
class AqlEquals extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) === this.right.evaluate(attribute);
    }
}

// handles a not-equals operator
class AqlNotEquals extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) !== this.right.evaluate(attribute);
    }
}

// handles a greater-than-equals operator
class AqlGreaterEquals extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) >= this.right.evaluate(attribute);
    }
}

// handles a less-than-equals operator
class AqlLessEquals extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) <= this.right.evaluate(attribute);
    }
}

// handles a greater-than operator
class AqlGreater extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) > this.right.evaluate(attribute);
    }
}

// handles a less-than operator
class AqlLess extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) < this.right.evaluate(attribute);
    }
}

// handles an and operator
class AqlAnd extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) && this.right.evaluate(attribute);
    }
}

// handles an or operator
class AqlOr extends AqlDiatomic {
    evaluate (attribute: Attribute): boolean {
        return this.left.evaluate(attribute) || this.right.evaluate(attribute);
    }
}

// handles an in / not in operator
class AqlIn extends AqlDiatomic {
    hasNot: any;

    constructor (left: any, right: any, hasNot: boolean) {
        super(left, right);

        this.hasNot = hasNot;
    }

    evaluate (attribute: Attribute): any {
        // we assume .right is an array (AqlArray)
        const result = this.right.evaluate(attribute).includes(this.left.evaluate(attribute));
        return this.hasNot ? !result : result;
    }
}

// handles a like operator
class AqlLike extends AqlDiatomic {
    hasNot: any;
    escapeVal: any;

    constructor (left: any, right: any, hasNot: boolean, escape: { value: any; }) {
        super(left, right);

        this.hasNot = hasNot;
        this.escapeVal = escape ? escape.value : null;
    }

    evaluate (attribute: Attribute): boolean {
        // we assume .right evaulates to a string
        const attVal = this.left.evaluate(attribute);
        let pattern = this.right.evaluate(attribute);
        if (this.escapeVal) {
            // regex checks for some quote to start string, same type of quote to end string, and take the capturing group in between as the real escape value
            const realEscapeVal = this.escapeVal.match(/^('|"|\\"|\\')(.*)\1$/);
            this.escapeVal = realEscapeVal ? realEscapeVal[2] : this.escapeVal;
        }

        // special characters to be checked (╯°□°)╯
        const valEscRegex = /[(!"#$%&\'+,.\\\/:;<=>?@[\]^`{|}~)]/g;
        const patternEscRegex = /[(!"#$\'+,.\\\/:;<=>?@[\]^`{|}~)]/g;

        // REGEX FORMAT FOR %: LIKE '%/ௌ%%' ESCAPE 'ௌ', convert ௌ% to a hidden string to avoid being converted to JS regex form (.*)
        // should work for most other escape characters other than ௌ should it get changed in plugins, some exceptions for SQL meaningful characters
        if (this.escapeVal) {
            pattern = pattern.replace(new RegExp(`${this.escapeVal}%`, 'g'), 'hiddenpercent');
            pattern = pattern.replace(new RegExp(`${this.escapeVal}_`, 'g'), 'hiddenunderscore');
        }

        // TODO: may or may not need a different way to handle _ in the future since it is not being used at the moment in where clauses, but this should work

        // escape all special characters to be able to test properly with pattern
        const newAttVal = attVal.replace(valEscRegex, '\\$&');
        pattern = pattern.replace(patternEscRegex, '\\\\\\$&');

        // convert % to *, and make pattern respect start and end of the string, also convert _ to match single character (_ not being used at the moment)
        pattern = `^${pattern.replace(/%/g, '.*')}$`.replace(/_/g, '.');
        // convert any hidden strings back to % and _
        pattern = pattern.replace(/hiddenpercent/g, '\\\\\\%');
        pattern = pattern.replace(/hiddenunderscore/g, '_');

        const result = RegExp(pattern).test(newAttVal);
        return this.hasNot ? !result : result;
    }
}

// handles a value with a prefix
class AqlPrefix extends AqlAtomic {
    supportedPrefixes: string[];
    prefix: any;
    negative: boolean;

    constructor (val: any, prefix: any) {
        super(val);

        // add support for additional prefixes here
        this.supportedPrefixes = ['-', '+'];
        this.prefix = prefix;
        this.negative = this.prefix === '-' ? true : false;
        if (!this.supportedPrefixes.includes(this.prefix)) {
            throw new Error('Unexpected prefix not recognized : ' + this.prefix);
        }
    }

    evaluate (attribute: Attribute): number {
        // check if value is a number and is negative
        const result = this.value.evaluate(attribute);
        if (!isNaN(result)) {
            return this.negative ? result * -1 : result;
        } else {
            throw new Error(`Expected numeric value after ${this.prefix} prefix but none found`);
        }
    }
}

// handles a not operator
class AqlNot extends AqlAtomic {
    evaluate (attribute: Attribute): boolean {
        return !this.value.evaluate(attribute);
    }
}

// handles a set of parenthesis
class AqlParentheses extends AqlAtomic {
    evaluate (attribute: Attribute): boolean {
        // INTENSE
        return this.value.evaluate(attribute);
    }
}

// handles an inline function.
// can add functions as we find need to support them
class AqlFunctionCall extends AqlRoot {
    params: Array<AqlRoot>;
    fName: string;

    constructor (functionName: string, params: Array<AqlRoot>) {
        super();

        this.params = params || []; // array of parameters for the function. can be none or many

        // get what function we are doing, check for support
        this.fName = functionName.toLowerCase();
        if (['upper', 'lower', 'date'].indexOf(this.fName) === -1) {
            throw new Error('Encountered unsupported sql function in filter. Unhandled function: ' + functionName);
        }
    }

    evaluate (attribute: Attribute): any {
        // call our named function. evaluate the parameters array then pass them as actual params to the function
        return this[this.fName](...this.params.map((p: AqlRoot) => p.evaluate(attribute)));
    }

    // assumes param will be a string
    upper (value: string): string {
        return value.toUpperCase();
    }

    // assumes param will be a string
    lower (value: string): string {
        return value.toLowerCase();
    }

    // assumes param will be something that can be cast to a date
    date (value: string | number | Date) {
        // ESRI date fields are epoch dates (integers).
        const d = new Date(value);
        return d.getTime();
    }

}

// converts a tree node from our SQL parse output to the appropriate Aql object
function sqlNodeToAqlNode (node: { type: string; }): AqlRoot {

    // TODO add support for datatype casting?

    const typeReactor = {
        AndExpression: (n: { left: any; right: any; }): AqlAnd => {
            return new AqlAnd(sqlNodeToAqlNode(n.left), sqlNodeToAqlNode(n.right));
        },
        OrExpression: (n: { left: any; right: any; }): AqlOr => {
            return new AqlOr(sqlNodeToAqlNode(n.left), sqlNodeToAqlNode(n.right));
        },
        NotExpression: (n: { value: any; }): AqlNot => {
            return new AqlNot(sqlNodeToAqlNode(n.value));
        },
        InExpressionListPredicate: (n: { left: any; right: any; hasNot: any; }): AqlIn => {
            return new AqlIn(sqlNodeToAqlNode(n.left), sqlNodeToAqlNode(n.right), !!n.hasNot);
        },
        LikePredicate: (n: { left: any; right: any; hasNot: any; escape: any; }): AqlLike => {
            return new AqlLike(sqlNodeToAqlNode(n.left), sqlNodeToAqlNode(n.right), !!n.hasNot, n.escape);
        },
        ComparisonBooleanPrimary: (n: { operator: string; left: any; right: any; }): AqlDiatomic => {
            const operatorMap = {
                '=': AqlEquals,
                '==': AqlEquals,
                '===': AqlEquals,
                '>': AqlGreater,
                '>=': AqlGreaterEquals,
                '<': AqlLess,
                '<=': AqlLessEquals,
                '!=': AqlNotEquals,
                '!==': AqlNotEquals
            };

            const aqlClass = operatorMap[n.operator];
            if (!aqlClass) {
                throw new Error('Encountered unsupported operator in filter. Unhandled operator: ' + n.operator);
            }

            return new aqlClass(sqlNodeToAqlNode(n.left), sqlNodeToAqlNode(n.right));
        },
        FunctionCall:  (n: { name: string; params: { map: (arg0: (p: any) => any) => any; }; }): AqlFunctionCall => {
            return new AqlFunctionCall(n.name, n.params.map((p: any) => sqlNodeToAqlNode(p)));
        },
        Identifier: (n: { value: string; }): AqlIdentifier => {
            return new AqlIdentifier(n.value);
        },
        Prefix: (n: { value: any; prefix: any; }): AqlPrefix => {
            return new AqlPrefix(sqlNodeToAqlNode(n.value), n.prefix);
        },
        Number: (n: { value: any; }): AqlLiteral => {
            // number in string form
            return new AqlLiteral(Number(n.value));
        },
        String: (n: { value: string; }): AqlLiteral => {
            // remove embedded quotes from string
            // TODO check if escaped double quote actually exists or was just part of the npm test page output display
            let s: string = n.value;
            if (s.startsWith('"') || s.startsWith(`'`)) {
                s = s.substring(1, s.length - 1);
            } else if (s.startsWith('\"')) {
                s = s.substring(2, s.length - 2);
            }
            return new AqlLiteral(s);
        },
        Boolean: (n: { value: string; }): AqlLiteral => {
            // node values are in all caps
            return new AqlLiteral(n.value.toLowerCase() === 'true');
        },
        ExpressionList: (n: { value: { map: (arg0: (nn: any) => any) => void; }; }): AqlArray => {
            // this code currently assumes that items in the expression list are literals.
            // if we need any dynamically generated stuff (i.e. checking against other attribute properties)
            // then this needs to change and the guts of AqlArray.evaluate needs to generate the array at
            // every call (way less efficient)
            return new AqlArray(n.value.map((nn: any) => sqlNodeToAqlNode(nn).evaluate()));
        },
        SimpleExprParentheses: (n: { value: { type: string; value: any[]; }; }): AqlParentheses => {
            // n.value here is an ExpressionList, but i've yet to see an instance where it has more than one element in the array.
            // for now we do a hack and hoist up the first element. This hack lets us pre-evaluate other expression lists
            // (i.e. ones used in IN commands) that are filled with constants.

            // TODO invest some time to try to find a case where there is > 1 element, and ensure the ExpressionList result
            //      formatting doesn't break the equation.
            // TODO there could be some minor optimization in removing the brackets from the expression list
            //      or conversly not adding brackets here.  Would want to be confident we know n.value is
            //      always an expression list. Not urgent, no harm in redundant brackets.

            if (n.value.type === 'ExpressionList') {
                if (n.value.value.length > 1) {
                    console.warn(`While converting SQL to AQL, encountered a parsed bracket containing an ExpressionList with more than one element`, n.value);
                }
                return new AqlParentheses(sqlNodeToAqlNode(n.value.value[0]));
            } else {
                // warn, and hail mary that we can just parse it
                console.warn(`While converting SQL to AQL, encountered a parsed bracket containing ${n.value.type} instead of ExpressionList`);
                return new AqlParentheses(sqlNodeToAqlNode(n.value));
            }
        }
    };

    if (!typeReactor[node.type]) {
        throw new Error('Encountered unsupported query in filter. Unhandled type: ' + node.type);
    } else {
        return typeReactor[node.type](node);
    }
}

// scans a where clause for any funny notation and attempts to convert to standard sql
// returns cleaned version.
function standardizeSql (sqlWhere: string): string {

    // ESRI supports a non-standard approach to casting dates.
    // e.g. you can say `start_date < DATE '1-1-2001'`
    // our sql parser will die on this.
    // so we attempt to convert it to a function.

    // TODO this logic needs flushing out.
    //      can there be other delimiters? can they have escape characters?
    //      do we need to handle a date cast on an attribute name instead of a constant?
    //      can we rely on a space before/after DATE function?

    const findDate = (sql: { toUpperCase: () => { indexOf: (arg0: string) => number; }; }): number => {
        return sql.toUpperCase().indexOf(' DATE ');
    };

    let nextDate = findDate(sqlWhere);

    while (nextDate > -1) {

        const firstDelim = sqlWhere.indexOf(`'`, nextDate);
        const lastDelim = sqlWhere.indexOf(`'`, firstDelim + 1);

        // put bracket before and after delimiters
        sqlWhere = sqlWhere.substring(0, nextDate) + ' DATE(' + sqlWhere.substring(firstDelim, lastDelim + 1) +
            ')' + sqlWhere.substring(lastDelim + 1);

        // see if we still have more DATE functions
        nextDate = findDate(sqlWhere);
    }

    return sqlWhere;

}

export default class Aql {

    protected root: AqlRoot;

    // converts a SQL where clause to an Aql object
    static fromSql (sqlWhere: string): Aql {

        const fakeSQL: string = 'SELECT muffins FROM pod WHERE ' + standardizeSql(sqlWhere);

        // the sqlParser will construct an object tree of the sql statement. we then crawl through the where clause tree
        // and convert each node to the equivalent aql object
        const queryTree = sqlParser.parse(fakeSQL);
        const newAql = new Aql();
        newAql.root = sqlNodeToAqlNode(queryTree.value.where);
        return newAql;
    }

    // TODO make a nicely named type/interface for attributes
    evaluate(attributes: any): boolean {
        if (this.root) {
            return this.root.evaluate(attributes);
        } else {
            throw new Error('Aql class was not initialized. Use Aql.fromSql()');
        }
    }
}

