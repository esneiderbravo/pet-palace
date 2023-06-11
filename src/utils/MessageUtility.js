import React from 'react';
import { Alert } from '@mui/material';

const MessageUtility = (message, type) => {
  return <Alert severity={type}>{message}</Alert>;
};

export default MessageUtility;
