if [ -z "${FIGMA_TOKEN}" ] && [ ! -f ./.env ]; then
    echo "⚠️ You do not have packages/styleguide-icons/.env file or correct environment variables set.

Please create it from packages/styleguide-icons/.env.example and fill it with your credentials.

Instead, bundling a stub for @expo/styleguide-icons that is empty.
Read the README.md in packages/styleguide-icons to build the icon set.
"
    yarn build-stub && exit 0
else
    yarn build-icons && exit 0
fi
