import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
// import boxen from "boxen";
import ora from "ora";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import terminalLink from "terminal-link";
import inquirer from "inquirer";

// Helper functions
const sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

async function typeWriter(text, delay = 10) {
  for (const char of text) {
    process.stdout.write(char);
    await sleep(delay);
  }
  process.stdout.write("\n");
}

async function displayBusinessCard() {
  console.clear();

  const spinner = createSpinner("Loading profile...").start();
  await sleep(1500);
  spinner.success({ text: "✅ Profile loaded!" });
  await sleep(500);

  const data = {
    name: "Aditya Sah",
    title: "Software Engineer",
    github: "Adityasah2004",
    linkedin: "adityasah",
    portfolio: "adityasah.dev",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "UI/UX Design",
      "Machine Learning",
      "GCP",
    ],
    urls: [
      "https://github.com/Adityasah2004",
      "https://adityasah.framer.website/",
      "https://www.linkedin.com/in/aditya-sah-a302ab22b",
    ],
  };

  console.log("\n");
  const nameText = figlet.textSync(data.name, {
    font: "ANSI Shadow",
    horizontalLayout: "fitted",
  });

  const rainbowTitle = chalkAnimation.rainbow(nameText);
  await sleep(1500);
  rainbowTitle.stop();

  // info content with typing effects
  let infoContent = "\n";

  await typeWriter(
    `${chalk.bold("👨‍💻 Title:")} ${chalk.hex("#FF6B6B")(data.title)}`
  );
  infoContent += `${chalk.bold("👨‍💻 Title:")} ${chalk.hex("#FF6B6B")(
    data.title
  )}\n`;

  await typeWriter(
    `${chalk.bold("🐙 GitHub:")} ${terminalLink(data.github, data.urls[0])}`
  );
  infoContent += `${chalk.bold("🐙 GitHub:")} ${terminalLink(
    data.github,
    data.urls[0]
  )}\n`;

  await typeWriter(
    `${chalk.bold("🔗 Portfolio:")} ${terminalLink(
      data.portfolio,
      data.urls[1]
    )}`
  );
  infoContent += `${chalk.bold("🔗 Portfolio:")} ${terminalLink(
    data.portfolio,
    data.urls[1]
  )}\n`;

  await typeWriter(
    `${chalk.bold("📱 LinkedIn:")} ${terminalLink(
      data.linkedin,
      data.urls[2]
    )}\n`
  );
  infoContent += `${chalk.bold("📱 LinkedIn:")} ${terminalLink(
    data.linkedin,
    data.urls[2]
  )}\n\n`;

  await typeWriter(chalk.bold("🛠️ Skills:"));
  infoContent += `${chalk.bold("🛠️ Skills:")}\n`;

  for (const skill of data.skills) {
    const skillText = `  ${chalk.yellow("•")} ${chalk.hex("#6BFF6B")(skill)}`;
    await typeWriter(skillText);
    infoContent += `${skillText}\n`;
  }

  // const infoBox = boxen(infoContent, {
  //   padding: 1,
  //   margin: 1,
  //   borderStyle: "double",
  //   borderColor: "#FF6B6B",
  //   backgroundColor: "#1A1A1A",
  // });

  // console.log(infoBox);

  const progressSpinner = ora("Loading inspiration...").start();
  await sleep(1500);
  progressSpinner.succeed("Inspiration loaded!");

  console.log("\n");
  await typeWriter(
    gradient.pastel('"The only way to do great work is to love what you do."')
  );
  await typeWriter(gradient.cristal("- Steve Jobs"));
  console.log("\n");

  await sleep(1000);
  console.log(
    gradient.rainbow(
      "----------------------------------------------------------"
    )
  );
  await typeWriter(
    gradient.retro("\n🚀 Let's build something amazing together!\n")
  );

  const response = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: chalk.hex("#FF6B6B")("What would you like to do?"),
      choices: [
        { name: gradient.cristal("Visit GitHub"), value: "github" },
        { name: gradient.cristal("View Portfolio"), value: "portfolio" },
        { name: gradient.cristal("Connect on LinkedIn"), value: "linkedin" },
        { name: gradient.cristal("Exit"), value: "exit" },
      ],
    },
  ]);
  
  switch (response.action) {
    case "github":
      console.log(chalk.hex("#6BFF6B")(`\nOpening GitHub: ${data.urls[0]}\n`));
      break;
    case "portfolio":
      console.log(
        chalk.hex("#6BFF6B")(`\nOpening Portfolio: ${data.urls[1]}\n`)
      );
      break;
    case "linkedin":
      console.log(
        chalk.hex("#6BFF6B")(`\nOpening LinkedIn: ${data.urls[2]}\n`)
      );
      break;
    case "exit":
    default:
      const goodbyeSpinner = createSpinner("Preparing to exit...").start();
      await sleep(1000);
      goodbyeSpinner.success({ text: "👋 Thanks for visiting!" });
      console.log(gradient.rainbow("\nSee you next time!\n"));
  }
  
}

export default displayBusinessCard;

if (import.meta.url === `file://${process.argv[1]}`) {
  displayBusinessCard().catch(console.error);
}
