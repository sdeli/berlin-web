import React from 'react';

import styles from './input.css';

export interface inputProps {
  prop?: string;
}

export function input({prop = 'default value'}: inputProps) {
  return <div className={styles.input}>input {prop}</div>;
}
