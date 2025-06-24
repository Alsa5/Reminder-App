import { z } from "zod";
import { reminderController } from "../controllers/reminderController";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const registerUpdateReminderTool = (server: McpServer) => {
          server.registerTool(
          "update-reminder",
          {
            title: "Update Reminder",
            description: "Updates an existing reminder",
            inputSchema: {
              id: z.string(),
              updatedData: z.object({
                title: z.string().optional(),
                description: z.string().optional(),
                dueDate: z.string().optional()
              })
            }
          },
          async ({ id, updatedData }, extra) => {
            await reminderController.update(id, updatedData);
            

            return {
              content: [{ type: "text", text: `Reminder ${id} updated.` }]
            };
          })
};



