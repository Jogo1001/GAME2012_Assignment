#version 460 core

in vec3 color;
out vec4 FragColor;

void main()
{
    // Output the interpolated color with full alpha
    FragColor = vec4(color, 1.0);
}
