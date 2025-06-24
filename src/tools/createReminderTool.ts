import { z } from "zod";
import { reminderController } from "../controllers/reminderController";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const registerCreateReminderTool = (server: McpServer) => {
  server.registerTool(
          "create-reminder",
          {
            title: "Create Reminder",
            description: "Add a new reminder",
            inputSchema: {
              title: z.string(),
              description: z.string(),
              dueDate: z.string()
            }
          },
          async ({ title, description, dueDate }, extra) => {
            const reminder = {
              id: new Date().toISOString(),
              title,
              description,
              dueDate
            };
            await reminderController.create(reminder);

           

            return {
              content: [{ type: "text", text: `Reminder "${title}" created.` }]
            };
          }
        );
    }


