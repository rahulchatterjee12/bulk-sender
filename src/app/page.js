"use client";

import { Box, Button } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex justify-center">
      <Box
        sx={{
          border: "1px solid grey",
          borderRadius: "15px",
          width: { md: "30vw", xs: "95vw" },
          minHeight: "80vh",
          marginTop: 5,
          boxShadow: 5,
        }}
      >
        <h1 className="text-center mt-2 font-serif text-lg text-gray-800">
          <MarkEmailReadIcon />
          <span className="ml-2">Whatsapp BMS Home</span>
        </h1>
        <div className="flex flex-col justify-center gap-5 mt-10 mx-16">
          <Button
            onClick={() => router.push("/bulk-sender")}
            variant="contained"
            color="inherit"
          >
            Send Bulk Message
          </Button>
          <Button
            onClick={() => router.push("/saved-list")}
            variant="outlined"
            color="inherit"
          >
            Check Report
          </Button>
        </div>
      </Box>
    </main>
  );
}
