import { Client, GatewayIntentBits, Guild, SlashCommandBuilder } from "discord.js"
import Module from "./Module"

export default interface ModuleImplementation {
	new (guild: Guild, client: Client<true>): Module
	readonly friendlyName: string
	readonly description?: string
	readonly intents?: GatewayIntentBits[]
}