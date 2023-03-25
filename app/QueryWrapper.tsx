"use client"

import React, { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "react-hot-toast"

interface Props {
  children?:ReactNode
}

const queryClient = new QueryClient()

const QueryWrapper = ({children}) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)

export default QueryWrapper
