export class AlertHelper {
    static dropDown;
    static onClose;

    static setDropDown(dropDown) {
        this.dropDown = dropDown;
    }

    // payload = { message: 'HelloWorld', source: ReactNativeLogo };
    static show() {
        this.dropDown.show()
        // if (this.dropDown) {
        //     if (interval) {
        //         this.dropDown.alertWithType(type, title, message, this.getIcon(type, message), interval);
        //     } else {
        //         this.dropDown.alertWithType(type, title, message, this.getIcon(type, message));
        //     }
        // }
    }
    static confirm(callfunction) {
        this.dropDown.confirm(callfunction)
    }



    static setOnClose(onClose) {
        this.onClose = onClose;
    }

    static invokeOnClose() {
        if (typeof this.onClose === 'function') {
            this.onClose();
        }
    }
}
