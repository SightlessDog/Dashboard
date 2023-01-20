import { styled } from "@stitches/react";
import React, { useState } from "react";
import { SearchIcon } from "../assets/icons/SearchIcon";
import { Flex } from "./Flex";
import { TargetIcon } from "../assets/icons/TargetIcon";
import { Box } from "./Box";

interface InputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  required?: boolean;
}

const InputElement = styled("input", {
  borderRadius: "5px",
  border: "none",
  backgroundColor: "$primaryColor",
  "&::placeholder": {
    color: "$primaryTextColor",
  },
  "&:hover": {
    backgroundColor: "$secondaryColor",
  },
  "&:focus": {
    outline: "none",
    backgroundColor: "$secondaryColor",
  },
  transition: "background-color 300ms linear",
});

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = "Search for places...",
  onChange,
  value,
  error,
  minLength,
  maxLength,
  pattern,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [currentValue, setCurrentValue] = useState(value);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    setCurrentValue(newValue);
    onChange(newValue);
  };

  const inputClasses = `input ${isFocused ? "input-focused" : ""} ${
    !isValid ? "input-error" : ""
  }`;

  return (
    <div>
      <label>{label}</label>
      <Flex alignY="center" gap="1">
        <Flex css={{ position: "relative" }}>
          <Flex
            css={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "4px",
            }}
          >
            <SearchIcon width="15px" height="15px" />
          </Flex>
          <InputElement
            placeholder={placeholder}
            onChange={handleChange}
            value={currentValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            required={required}
            css={{
              width: "150px",
              height: "40px",
              paddingLeft: "1.5rem",
              paddingRight: "4rem",
            }}
          />

          <Flex
            alignY="center"
            alignX="center"
            css={{
              width: "30px",
              height: "30px",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              right: "2px",
            }}
          >
            <Flex
              css={{ width: "100%", height: "100%", borderRadius: "100%" }}
              color="secondary"
              alignX="center"
              alignY="center"
            >
              <TargetIcon width="80%" height="80%" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {!isValid && error && <div className="input-error-message">{error}</div>}
    </div>
  );
};
