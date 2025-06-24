import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerCreateReminderTool } from "./createReminderTool";
import { registerReadReminderTool } from "./readReminderTool";
import { registerUpdateReminderTool } from "./updateReminderTool";
import { registerDeleteReminderTool } from "./deleteReminderTool";

export const initializeReminderTools = (server: McpServer) => {
  registerCreateReminderTool(server);
  registerReadReminderTool(server);
  registerUpdateReminderTool(server);
  registerDeleteReminderTool(server);
};
