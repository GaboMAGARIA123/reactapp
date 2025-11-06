// src/hooks/useFormValidation.js
import { useState } from "react";

export default function useFormValidation(initialFields) {
  const [fields, setFields] = useState(initialFields);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFields({
      ...fields,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = (rules) => {
    const newErrors = {};
    Object.entries(rules).forEach(([key, rule]) => {
      const value = fields[key]?.trim?.() || fields[key];
      if (rule.required && !value) newErrors[key] = rule.message || `${key} is required`;
      else if (rule.pattern && !rule.pattern.test(value)) newErrors[key] = rule.message || `Invalid ${key}`;
      else if (rule.match && value !== fields[rule.match]) newErrors[key] = rule.message || `${key} must match ${rule.match}`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { fields, errors, handleChange, validate };
}
