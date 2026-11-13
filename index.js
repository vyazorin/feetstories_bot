import "dotenv/config";
import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

const SUPPORT_CHANNEL_URL = `https://t.me/${process.env.SUPPORT_CHANNEL_USERNAME}`;

bot.start(async (ctx) => {
  await ctx.reply(
    "Добро пожаловать в FeetStories — интерактивные истории для взрослых.\n\n" +
    "Скоро здесь появится первая бесплатная глава.",
    Markup.inlineKeyboard([
      [Markup.button.url("Канал FeetStories", SUPPORT_CHANNEL_URL)]
    ])
  );
});

bot.command("support", async (ctx) => {
  await ctx.reply(
    "Канал FeetStories: новости, идеи и поддержка.",
    Markup.inlineKeyboard([
      [Markup.button.url("Открыть канал", SUPPORT_CHANNEL_URL)]
    ])
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply(
    "FeetStories — интерактивные 18+ истории.\n\n" +
    "Пока доступен только канал поддержки. Mini App появится на следующем этапе."
  );
});

bot.launch();

console.log("FeetStories bot is running");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));