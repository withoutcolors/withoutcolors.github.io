// grau

let theme = () => document.documentElement.getAttribute('theme-variable');

const toogleTheme = (e) => {
  const setTheme = (th) => {
    document.getElementById('theme');
    document.documentElement.setAttribute('theme-variable', th);
  };

  if (e)
    if (e === 'light')
      setTheme('light');
    else
      setTheme('dark');
  else if (theme() === 'dark')
    setTheme('light');
  else
    setTheme('dark');
};

document.getElementById('theme').addEventListener('click', () => {
  toogleTheme();
});