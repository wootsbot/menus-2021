# instructions

- ↪️ Crear el hook `"useMenus"`
- ↪️ Use el hook `useDispatch` de `react-redux` en `"useMenus"` para accionar la accion `getMenus` de `/src/providers/MenusProvider/actions.js`
- ↪️ Use el hook `useSelector` de `react-redux` en `"useMenus"` para recuperar la información del selector de `/src/providers/MenusProvider/selectors.js`
- Mostrar lista de menú en `src/pages/index.js`
- Use https://emotion.sh/docs/styled para embellecer su lista de menus.

  - Ejemplo:

  ```js
  import styled from '@emotion/styled';

  const List = styled.ul`
    background-color: antiquewhite;
  `;

  const ListItem = styled.li`
    color: turquoise;
  `;

  return (
    <List>
      <ListItem> menu #1 </ListItem>
      <ListItem> menu #2 </ListItem>
    </List>
  );
  ```

## Puntos extra

- ↪️ Use el hook `useDispatch` de `react-redux` en `"useMenus"` para accionar la accion `updateMenuPrice` de `/src/providers/MenusProvider/actions.js` para actualizar el precio de un menú
