export interface ExtentguardConfig {
    alwaysOn: boolean;
    extentSetIds: Array<string>;
}
export interface ExtentguardState {
    active: boolean;
    enforcing: boolean;
    alwaysOn: boolean;
    extentSetIds: Array<string>;
}
