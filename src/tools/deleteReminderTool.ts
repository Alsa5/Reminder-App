import { z } from "zod";
import { reminderController } from "../controllers/reminderController";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const registerDeleteReminderTool = (server: McpServer) => {
   server.registerTool(
          "delete-reminder",
          {
            title: "Delete Reminder",
            description: "Deletes a reminder",
            inputSchema: {
              id: z.string()
            }
          },
          async ({ id }, extra) => {
            await reminderController.delete(id);
            

            return {
              content: [{ type: "text", text: `Reminder ${id} deleted.` }]
            };
          }
        );

};


