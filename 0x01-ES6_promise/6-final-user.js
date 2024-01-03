import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const ar = [];
      values.forEach((value) => {
        if (value.status === 'fulfilled') {
          ar.push({ status: value.status, value: value.value });
        } else {
          ar.push({ status: value.status, value: value.reason.message });
        }
      });
      return ar;
    });
}
