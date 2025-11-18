import axios from "axios";
import React, { useEffect, useState } from "react";

const useCard = () => {
  const [skills, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../data.json")
      .then((data) => setApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { skills, loading, error };
};

export default useCard;
