const voted: { [name: string]: boolean } = {};

const checkVoter = (name: string): void => {
  if (voted[name]) {
    console.log("Kick them out");
  } else {
    voted[name] = true;
    console.log("Let them vote");
  }
};

checkVoter("rick");
checkVoter("morty");
checkVoter("morty");
checkVoter("morty");
checkVoter("beth");
