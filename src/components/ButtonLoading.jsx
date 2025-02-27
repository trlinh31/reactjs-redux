import React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ButtonLoading() {
  return (
    <>
      <Button disabled>
        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        Đang tải
      </Button>
    </>
  );
}
