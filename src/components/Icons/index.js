export const UploadIcon = () => (
    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
        <path d="M25 15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h2Z"></path>
        <path d="M33.58 4.5H14.42c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73 44.6 44.6 0 0 0-.07 3.37v19.16c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h19.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.42c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69 44.6 44.6 0 0 0-3.37-.07ZM10.14 8.83c.2-.1.53-.21 1.24-.27.73-.06 1.69-.06 3.12-.06h19c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v19c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-19c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25-.06-.73-.06-1.69-.06-3.12v-19c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31Z"></path>
    </svg>
);
export const MessageIcon = ({ count }) => (
    <svg
        fill="currentColor"
        className="css-1gnduad-5e6d46e3--StyledMessageIcon e1kd34rf0"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
    >
        <path d="M2.18 9.67A2 2 0 0 1 4 8.5h40a2 2 0 0 1 1.74 3l-20 35a2 2 0 0 1-3.65-.4l-5.87-18.6L2.49 11.82a2 2 0 0 1-.31-2.15Zm18.2 17.72 4.15 13.15L40.55 12.5H8.41l9.98 11.41 11.71-7.2a1 1 0 0 1 1.38.32l1.04 1.7a1 1 0 0 1-.32 1.38L20.38 27.4Z"></path>
    </svg>
);
export const SearchIcon = () => (
    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.83 7.5a14.34 14.34 0 1 1 0 28.68 14.34 14.34 0 0 1 0-28.68Zm0-4a18.33 18.33 0 1 0 11.48 32.64l8.9 8.9a1 1 0 0 0 1.42 0l1.4-1.41a1 1 0 0 0 0-1.42l-8.89-8.9A18.34 18.34 0 0 0 21.83 3.5Z"
        ></path>
    </svg>
);
export const InboxIcon = ({ count }) => (
    <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <svg
            fill="currentColor"
            fontSize="32px"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
        >
            <path d="M9 11.5A2.5 2.5 0 0 1 11.5 9h25a2.5 2.5 0 0 1 2.5 2.5l.06 21a2.5 2.5 0 0 1-2.5 2.5H29.2l-3.27 4a2.5 2.5 0 0 1-3.87 0l-3.28-4h-7.35a2.5 2.5 0 0 1-2.5-2.5l.06-21Zm3 .5-.06 20h8.27L24 36.63 27.79 32h8.27L36 12H12Z"></path>
            <path d="M18 22a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H19a1 1 0 0 1-1-1v-1Z"></path>
        </svg>

        {/* Badge số thông báo */}
        {count > 0 && (
            <span
                style={{
                    position: 'absolute',
                    top: -6,
                    right: -6,
                    backgroundColor: 'rgb(255, 59, 92)',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: 12,
                    fontWeight: 'bold',
                    lineHeight: 1,
                    minWidth: 20,
                    textAlign: 'center',
                    userSelect: 'none',
                }}
            >
                {count}
            </span>
        )}
    </div>
);
