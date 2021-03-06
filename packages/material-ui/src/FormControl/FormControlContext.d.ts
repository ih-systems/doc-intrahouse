import { Context } from 'react';
import { FormControlProps } from './FormControl';

// shut off automatic exporting
export {};

type ContextFromPropsKey = 'disabled' | 'error' | 'margin' | 'required' | 'variant';

export interface FormControl extends Pick<FormControlProps, ContextFromPropsKey> {
  adornedStart: boolean;
  filled: boolean;
  focused: boolean;
  onBlur: () => void;
  onEmpty: () => void;
  onFilled: () => void;
  onFocus: () => void;
}

export function useFormControl(): FormControl;
