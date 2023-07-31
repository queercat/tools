#!/bin/sh

# Build gen.
cwd=$(pwd)
cd ../gen/src && yarn build
cd $cwd

ln -s ../gen/bin/gen.js ./
mv ./gen.js ./bin/

# Build the Windows "binary".
cwd=$(pwd)
cd ./winblows

cat <<EOF > gen.ps1
# Join the arguments into a single string with spaces in between
\$arguments = \$args -join ' '

# Define the path to the node.js executable and the gen.js script
\$nodePath = "node"
\$genScriptPath = "\$PSScriptRoot/../../gen/bin/gen.js"

# Build the full command to execute
\$fullCommand = "\$nodePath \$genScriptPath \$arguments"

# Execute the command and capture the output
\$output = Invoke-Expression -Command \$fullCommand

# Output the result
Write-Output \$output
EOF

cd $cwd