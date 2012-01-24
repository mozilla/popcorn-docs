#/bin/sh

# requires an alias called popcorn in your ~/.ssh/config file
# ie:
# Host popcorn
#   HostName popcornjs.org
#   User myusername

jekyll
rsync -vaz --delete _site/ -e ssh popcorn:/var/www/popcornjs.org/popcorn-docs/
