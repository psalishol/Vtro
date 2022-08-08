

 const SIGNUP_OBJECT = [
    {
      id: 1,
      key: "name",
      hint: "Full Name",
      iconName: "person",
      isPassword: false,
    },
    {
      id: 2,
      hint: "example@email.com",
      key: "email",
      iconName: "email",
      isPassword: false,
    },
    {
      id: 3,
      hint: "Role",
      key: "title",
      iconName: "business",
      isPassword: false,
    },
    // {
    //   id: 4,
    //   hint: "Favourite Quote",
    //   key: "favouriteQuote",
    //   iconName: "email",
    //   isPassword: false,
    // },
  
    // {
    //   id: 4,
    //   hint: "Password",
    //   key: "password",
    //   iconName: "lock-outline",
    //   isPassword: true,
    // },
  ];
  



  const SIGN_IN_OBJECT = [
    {
        id: 1,
        key: "email",
        hint: "Your Email",
        iconName: "email",
        isPassword: false,
      },
      {
        id: 2,
        hint: "Password",
        key: "password",
        iconName: "lock-outline",
        isPassword: true,
      },
  ];

  export {SIGNUP_OBJECT, SIGN_IN_OBJECT}