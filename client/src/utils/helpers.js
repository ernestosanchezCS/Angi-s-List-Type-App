export const signIn = async () => {
  const [email, pswd] = document.querySelectorAll("input");

  if (email.value.trim() !== "" && pswd.value.trim() !== "") {
    const signInRequest = await fetch("/signIn", {
      headers: {
        content: "application/json",
      },
      body: JSON.stringify({ email, pswd }),
      method: "POST",
    });

    if (signInRequest.ok) {
      const signedIn = await signInRequest.json();
      if (signedIn) {
        window.location.replace(`/profiles/`);
      }
    } else {
      alert(
        "Unable to sign in. Please check email and password, or make an account."
      );
    }
  }
};
