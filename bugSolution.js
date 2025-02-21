The solution involves using optional chaining or conditional rendering to gracefully handle cases where the object might be null or undefined before the data has loaded.

```javascript
// Solution using optional chaining
const MyComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData().then(setUser);
  }, []);

  return (
    <View>
      <Text>{user?.name || 'Loading...'}</Text> 
    </View>
  );
};


// Solution using conditional rendering
const MyComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then(user => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <Text>{user ? user.name : 'No user data'}</Text> 
    </View>
  );
};
```