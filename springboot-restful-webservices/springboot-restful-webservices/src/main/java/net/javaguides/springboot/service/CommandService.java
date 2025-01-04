package net.javaguides.springboot.service;

import net.javaguides.springboot.entity.Command;

import java.util.List;

public interface CommandService {
    Command createCommand(Command command);

    Command getCommandById(Long id);

    List<Command> getAllCommands();

    Command updateCommand(Command command);

    void deleteCommand(Long id);
}
