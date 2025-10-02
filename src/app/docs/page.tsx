"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function page() {
  return (
    <div className="min-h-screen bg-white">
      APIs Documentation <SwaggerUI url="/swagger.json" />
    </div>
  );
}
