import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot("5458419626:AAGRi5NiKIa05aQSseJZiX_mlWGJkq0vg5g", {
    polling: true
})
bot.onText(/\/start/, msg => {
    const chatId = msg.chat.id
    bot.sendMessage(chatId, `Assalomu aleykum  ${msg.from.first_name} , Xush kelibsiz😊!`, {
        reply_markup: {
            keyboard: [
                ["About Me📜", "My Projects📦"]
            ],

            resize_keyboard: true
        }
    })
})

bot.on("message", msg => {
    const chatId = msg.chat.id
    if (msg.text == "My Projects📦") {
        bot.sendMessage(chatId, "My projects", {
            reply_markup: {
                keyboard: [
                    ["Booksheltor", "Veterinary clinc", "Valmari"],
                    ["Gekme Mebel", "Pagoda JS", "Pagoda React"],
                    ["Orgamic", "Books and Authors"],
                    ["Menyu ◀"]
                ],
                resize_keyboard: true
            }
        })
    }

    if (msg.text == "Menyu ◀") {
        bot.sendMessage(chatId, "Asosiy menyu", {
            reply_markup: {
                keyboard: [
                    ["About Me📜", "My Projects📦"]
                ],

                resize_keyboard: true
            }
        })
    }
})

bot.on("message", msg => {
    const chatId = msg.chat.id

    if (msg.text == "About Me📜") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/photo_2022-02-18_16-48-55.jpg?alt=media&token=9248fba2-b7b2-4125-9378-26a0dfab6b57", {
            caption: `<strong>Inistitut:</strong> TATU,\n<strong>Specialty</strong>: Computer Engineering,\n<strong>Year of birth:</strong> 2000\n<strong>Place of birth:</strong> Bukxara,\n<strong>Current residence:</strong> Toshkent shahar,\n<strong>Educational center:</strong> Najot ta'lim,\n<strong>Specialty:</strong> Full Stack Developer,\n<strong>Technologies:</strong> HTML , Css , Scss , Sass , Java Script , React Js , Express Js , Git Hub`,
            parse_mode: "HTML"
        })
    }
})

bot.on("message", msg => {
    const chatId = msg.chat.id

    if (msg.text == "Booksheltor") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/booksheltor.png?alt=media&token=382fd542-3a00-457f-8035-9a427ff15c2c", {
            caption: `
        Texnologiya: Html, Css, JavaScript\nLogin: eve.holt@reqres.in

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://boooksheltorr.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/imtihon4.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Veterinary clinc") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/veteranary.png?alt=media&token=6623a3e4-4268-4091-80a3-408f3914fb77", {
            caption: `
        Texnologiya: Html, Css, scss

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://nifty-panini-685c60.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/imtihon-2-oy.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Valmari") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/valamrie.png?alt=media&token=69c9dc40-eae1-4d0c-87cf-667b75a5b654", {
            caption: `
        Texnologiya: Html, Css, Scss

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://valmariadaptive.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/valmari.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Gekme Mebel") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/gekme.png?alt=media&token=b1c76cf0-410d-4edb-8dc7-0584e1817b77", {
            caption: `
        Texnologiya: Html, Css, Scss

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://ekmi-site.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/2-oy_imtihon.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Pagoda JS") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/pagoda_js.png?alt=media&token=6e08c67e-b56c-4537-b2da-f40aba5e1cee", {
            caption: `
        Texnologiya: Html, Css, Java Script

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://pogodaa.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/Pododa.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Pagoda React") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/pagoda_react.png?alt=media&token=08ecb447-1126-4dee-8071-c24c74b797fd", {
            caption: `
        Texnologiya: Html, Css, Java Script, React Js

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://react-pogoda.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/react-pogoda.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Orgamic") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/orgamic.png?alt=media&token=8c76a965-0fdc-4c87-afa6-329b89028e2e", {
            caption: `
        Texnologiya: Html, Css, Scss

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://orgamicdeskop.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/orgamic.git"

                        }
                    ]
                ]
            }
        })
    }

    if (msg.text == "Books and Authors") {
        bot.sendPhoto(chatId, "https://firebasestorage.googleapis.com/v0/b/telegrambot-ed5f3.appspot.com/o/books_author.png?alt=media&token=7fe5d47b-a0b9-44ca-bf9e-72b44b7bf097", {
            caption: `
        Texnologiya: Html, Css, Java Script, React Js

        `,
            parse_mode: "HTML",
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: "Netlify ko'rish",
                            url: "https://bookauthorrr.netlify.app"

                        },
                        {
                            text: "Git Hub ko'rish",
                            url: "https://github.com/JurayevOgabek04/reactImtihon.git"

                        }
                    ]
                ]
            }
        })
    }
})
