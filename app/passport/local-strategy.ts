import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../../mocks/data";

passport.serializeUser((user: any, done) => {
  console.log("serialize", user)
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log("deserialize", id)
  try {
    const findUser = mockUsers.find((user)=> user.id === id);
    if (!findUser) throw new Error("User not found");
    done(null, findUser);
  } catch (error) {
    done(error, null);
  } 
});

export default passport.use(
  new Strategy((username, password, done) => {
    console.log(username);
    console.log(password);
    try {
      const findUser = mockUsers.find((user) => user.username === username);
      if (!findUser) throw new Error("User not found");
      if (findUser.password !== password) throw new Error("Invalid Credential");
      done(null, findUser);
    } catch (error) {
      done(error);
    }
  })
);
