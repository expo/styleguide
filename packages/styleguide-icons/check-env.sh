if [ ! -f ./.env ]; then
    echo "You do not have packages/styleguide-icons/.env file. Please create it from packages/styleguide-icons/.env.example and fill it with your credentials."
    exit 1
fi