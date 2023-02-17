if [ ! -f ./.env ]; then
    echo "⚠️ You do not have packages/styleguide-icons/.env file. Please create it from packages/styleguide-icons/.env.example and fill it with your credentials. Instead, bundling a stub for @expo/stylguide-icons that is empty. Read the README.md in packages/styleguide-icons to build the iconset."
    yarn build-stub && exit 0
else
    yarn build-icons && exit 0
fi