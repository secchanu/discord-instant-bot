import dotenv from "dotenv";
dotenv.config();

import { setTimeout } from "timers/promises";

import { ActivityType, Client, GatewayIntentBits } from "discord.js";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildInvites,
		GatewayIntentBits.GuildMessages,
	],
	presence: {
		activities: [
			{
				name: "サッカー⚽",
				type: ActivityType.Playing,
			},
		],
	},
});

const instant_ms = parseInt(`${process.env.INSTANT_MS}`) || 12 * 60 * 60 * 1000;

client.on("channelCreate", async (channel) => {
	await setTimeout(instant_ms);
	await channel.delete().catch(() => {
		return;
	});
});

client.on("guildMemberAdd", async (member) => {
	await setTimeout(instant_ms);
	await member.kick().catch(() => {
		return;
	});
});

client.on("inviteCreate", async (invite) => {
	await setTimeout(instant_ms);
	await invite.delete().catch(() => {
		return;
	});
});

client.on("messageCreate", async (message) => {
	await setTimeout(instant_ms);
	await message.delete().catch(() => {
		return;
	});
});

client.login(process.env.BOT_TOKEN);
