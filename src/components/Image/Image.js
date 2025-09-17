import { forwardRef } from 'react';

const Image = forwardRef(({ ...props }, ref) => {
    return <img ref={ref} {...props} alt=""></img>;
});
export default Image;
