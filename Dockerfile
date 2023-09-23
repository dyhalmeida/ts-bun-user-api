FROM oven/bun

WORKDIR /bun/src

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]