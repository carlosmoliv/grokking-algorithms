const voted: { [name: string]: boolean } = {};

const checkVoter = (name: string): void => {
  if (voted[name]) {
    console.log('Kick them out');
  } else {
    voted[name] = true;
    console.log('Let them vote');
  }
};

checkVoter('rick');
checkVoter('morty');
checkVoter('morty');
checkVoter('jerry');
checkVoter('beth');
checkVoter('beth');
checkVoter('summer');

const voted2 = new Map<string, boolean>();

const checkVoter2 = (name: string) => {
  if (voted2.get(name) === true) {
    console.log('Already voted!');
  } else {
    voted2.set(name, true);
    console.log('Vote registered!');
  }
};

checkVoter2('rick');
checkVoter2('rick');
checkVoter2('morty');
