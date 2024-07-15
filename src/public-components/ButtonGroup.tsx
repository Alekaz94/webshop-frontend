import { ToggleButtonContext } from 'react-aria-components';

interface ButtonGroupProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function ButtonGroup({ children, isDisabled }: ButtonGroupProps) {
  return (
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
      <ToggleButtonContext.Provider value={{ isDisabled }}>
        {children}
      </ToggleButtonContext.Provider>
    </div>
  );
}

export default ButtonGroup;
