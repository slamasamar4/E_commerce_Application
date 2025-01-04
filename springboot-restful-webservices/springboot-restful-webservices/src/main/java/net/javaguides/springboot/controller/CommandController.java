package net.javaguides.springboot.controller;

import lombok.AllArgsConstructor;
import net.javaguides.springboot.entity.Command;
import net.javaguides.springboot.service.CommandService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/commands")
public class CommandController {

    private CommandService commandService;

    // Create Command REST API
    @PostMapping
    public ResponseEntity<Command> createCommand(@RequestBody Command command) {
        Command savedCommand = commandService.createCommand(command);
        return new ResponseEntity<>(savedCommand, HttpStatus.CREATED);
    }

    // Get Command by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<Command> getCommandById(@PathVariable("id") Long id) {
        Command command = commandService.getCommandById(id);
        return new ResponseEntity<>(command, HttpStatus.OK);
    }

    // Get All Commands REST API
    @GetMapping
    public ResponseEntity<List<Command>> getAllCommands() {
        List<Command> commands = commandService.getAllCommands();
        return new ResponseEntity<>(commands, HttpStatus.OK);
    }

    // Update Command REST API
    @PutMapping("{id}")
    public ResponseEntity<Command> updateCommand(@PathVariable("id") Long id, @RequestBody Command command) {
        command.setId(id);
        Command updatedCommand = commandService.updateCommand(command);
        return new ResponseEntity<>(updatedCommand, HttpStatus.OK);
    }

    // Delete Command REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCommand(@PathVariable("id") Long id) {
        commandService.deleteCommand(id);
        return new ResponseEntity<>("Command successfully deleted!", HttpStatus.OK);
    }
}
