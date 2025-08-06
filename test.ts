test('Connexion + navigation vers Rooms', async ({ page }) => {
  const navigation = new NavigationHelper(page);
  const loginPage = new LoginPage(page); // tu n’as plus besoin de passer baseURL ici
