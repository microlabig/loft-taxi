const transformToCardNumber = (str) => {
    let newValue = str.split("")
        .filter(item => item !== " ")
        .map((item, index) => {
            if (index > 0 && index % 4 === 0) {

                return ` ${item}`;
            }

            return item;
        })
        .join("");

    if (newValue.length > 0) {
        const findStr = newValue.match(/[\d\s]{19}/);

        if (findStr) {
            newValue = findStr[0];
        }
    }

    return newValue;
}

const transformToExpiryDate = (str) => {
    let newValue = str.split("")
        .filter(item => item !== "/")
        .map((item, index) => {
            if (index > 0 && index % 2 === 0) {

                return `/${item}`;
            }

            return item;
        })
        .join("");

    if (newValue.length > 0) {
        const findStr = newValue.match(/[\d\D]{5}/);

        if (findStr) {
            newValue = findStr[0];
        }
    }

    return newValue;
}

const transformToCVC = (str) => {
    let newValue = str;

    if (newValue.length > 0) {
        const findStr = newValue.match(/\d{3}/);

        if (findStr) {
            newValue = findStr[0];
        }
    }

    return newValue;
}

export const onChangeValue = (e, { name, setFieldValue, handleChange }) => {
    if (!e.nativeEvent.data) {
        const currCursorPos = e.target.selectionStart;

        if (currCursorPos === e.target.value.length) {
            setFieldValue(name, "");
        }
    } else {
        const lastLetter = e.nativeEvent.data;

        if (lastLetter && !lastLetter.match(/\D/i)) {
            const currValue = e.target.value;
            let newValue = "";

            switch (name) {
                case "cardNumber":
                    newValue = transformToCardNumber(currValue);
                    break;
                case "expiryDate":
                    newValue = transformToExpiryDate(currValue);
                    break;
                case "cvc":
                    newValue = transformToCVC(currValue);
                    break;

                default:
                    newValue = e.target.value;
                    break;
            }

            handleChange(e);
            setFieldValue(name, newValue);
        }
    }
}

function setCaretPosition(ctrl, start, end) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(start, end);
    } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
    }
};

export const setCursorPosition = (obj, currPos) => {
    const length = obj.value.length;

    if (currPos < length) {
        setCaretPosition(obj, currPos, currPos + 1);
    }
}
