import Button from '~/components/Button';

function MenuItems({ data, onClick }) {
    return (
        <Button separate={data.separate} onClick={onClick} to={data.to} icon={data.icon} item>
            {data.title}
        </Button>
    );
}
export default MenuItems;
