import { AsyncLocalStorage } from "async_hooks";
import React, { createContext, useEffect, useState } from "react";

interface Data {
    token: string;
    setToken: any;
    signed: boolean;
}

export const AuthContext = createContext<Data>({} as Data);
