import { ChangeEvent, FocusEvent, KeyboardEvent, useMemo } from "react";
import { REG_DIGIT } from "../utils/constant";
import styles from "../styles/component/FormStep2.module.scss";

type Props = {
  value: string;
  length: number;
  onChange: (value: string) => void;
};

const OTPInputs = ({ value, length, onChange }: Props) => {
  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items: string[] = [];

    for (let i = 0; i < length; i++) {
      let char = valueArray[i];

      if (REG_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, length]);

  const focusToNextInput = (target: HTMLElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;

    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };

  const focusToPrevInput = (target: HTMLElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;

    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const isTargetValueDigit = REG_DIGIT.test(targetValue);

    if (!isTargetValueDigit && targetValue !== "") return;

    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, index) + targetValue + value.substring(index + 1);
      onChange(newValue);

      if (!isTargetValueDigit) return;

      focusToNextInput(target);
    } else if (targetValueLength === length) {
      onChange(targetValue);
      target.blur();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      focusToNextInput(target);
      return;
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      focusToPrevInput(target);
      return;
    }

    target.setSelectionRange(0, targetValue.length);

    if (key === "Backspace" || targetValue !== " ") return;

    focusToPrevInput(target);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    target.setSelectionRange(0, target.value.length);
  };

  return (
    <div className={styles.optGroup} dir="ltr">
      {valueItems.map((digit, index) => (
        <input
          key={index}
          className={styles.otpInput}
          type="text"
          inputMode="numeric"
          pattern="\d{1}"
          maxLength={length}
          autoComplete="one-time-code"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
        />
      ))}
    </div>
  );
};

export default OTPInputs;
