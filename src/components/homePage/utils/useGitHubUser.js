import { useState, useEffect } from 'react';

//Recuperer les infos de l'API.
const useGitHubUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://api.github.com/users/github-john-doe`);
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, []);

  return user;
};

export default useGitHubUser;
