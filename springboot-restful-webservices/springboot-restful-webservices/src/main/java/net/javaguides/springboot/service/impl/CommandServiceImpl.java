package net.javaguides.springboot.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Command;
import net.javaguides.springboot.repository.CommandRepository;
import net.javaguides.springboot.service.CommandService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
class CommandServiceImpl implements CommandService {

    private CommandRepository commandRepository;

    @Override
    public Command createCommand(Command command) {
        return commandRepository.save(command);
    }

    @Override
    public Command getCommandById(Long id) {
        return commandRepository.findById(id).orElseThrow(() -> new RuntimeException("Command not found with id: " + id));
    }

    @Override
    public List<Command> getAllCommands() {
        return commandRepository.findAll();
    }

    @Override
    public Command updateCommand(Command command) {
        return commandRepository.save(command);
    }

    @Override
    public void deleteCommand(Long id) {
        commandRepository.deleteById(id);
    }
}

