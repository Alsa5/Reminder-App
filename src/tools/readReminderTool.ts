import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { reminderController } from "../controllers/reminderController";

export const registerReadReminderTool = (server: McpServer) => {
   server.registerTool(
          "read-reminders",
          {
            title: "List Reminders",
            description: "Lists all reminders",
            inputSchema: {}
          },
          async () => {
            const reminders = await reminderController.read();
            return {
              content: reminders.map((r: any) => ({
                type: "text",
                text: `${r.title} – Due: ${r.dueDate}`
              }))
            };
          }
        );
};
