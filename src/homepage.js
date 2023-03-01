import { useHistory } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";

const Homepage = () => {
  const db = getDatabase(app);
  function addUserInformation(uid, name, email) {
    set(ref(db, `users/${uid}`), {
      name: name,
      email: email,
    });
  }

  return (
    <div className="homepage">
      <h2>welcome</h2>
    </div>
  );
};

export default Homepage;
