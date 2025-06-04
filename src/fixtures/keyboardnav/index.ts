import messages from './lang/lang.csv?raw';
import KeyboardnavV from './keyboardnav.vue';
import { KeyboardnavAPI } from './api/keyboardnav';
import { useKeyboardnavStore } from './store/keyboardnav-store';

/**
 * Keyboard Navigation Fixture
 *
 * Enables registration of namespace shortcuts (ALT+SHIFT+[Letter]) and
 * subsequent SHIFT+[Letter] shortcuts within the active namespace.
 */
class KeyboardnavFixture extends KeyboardnavAPI {
  added(): void {
    // merge translations
    Object.entries(messages).forEach(value =>
      (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
    );

    const { destroy, el } = this.mount(KeyboardnavV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
    innerShell.appendChild(el.childNodes[0]);

    super.added();

    this.removed = () => {
      super.removed();
      destroy();
      useKeyboardnavStore(this.$vApp.$pinia).$reset();
    };
  }
}

export default KeyboardnavFixture;