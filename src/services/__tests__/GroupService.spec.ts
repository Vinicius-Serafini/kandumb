import { describe, it, expect, beforeEach } from 'vitest';
import { createGroup, getAllGroups, getGroupById, deleteGroup, updateGroup } from '../GroupService';

describe('GroupService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('safely starts with an empty array when localStorage is clear', () => {
    const groups = getAllGroups();
    expect(groups).toEqual([]);
  });

  it('creates and persistently saves a new group', () => {
    const title = 'Test Group';
    const group = createGroup(title);

    expect(group.title).toBe(title);
    expect(group.id).toBeDefined();
    expect(group.cards).toEqual([]);

    const savedGroups = getAllGroups();
    expect(savedGroups).toHaveLength(1);
    expect(savedGroups[0].title).toBe(title);
  });

  it('finds an existing group specifically by its id', () => {
    const group = createGroup('Frontend Tasks');
    const found = getGroupById(group.id);
    
    expect(found).toBeDefined();
    expect(found?.title).toBe('Frontend Tasks');
  });

  it('updates an existing group title and reflects on memory', () => {
    const group = createGroup('Old Title');
    updateGroup(group.id, 'New Title');

    const updated = getGroupById(group.id);
    expect(updated?.title).toBe('New Title');
  });

  it('deletes a group gracefully ensuring array mutation', () => {
    const group1 = createGroup('Group 1');
    const group2 = createGroup('Group 2');

    expect(getAllGroups()).toHaveLength(2);

    deleteGroup(group1.id);

    const remaining = getAllGroups();
    expect(remaining).toHaveLength(1);
    expect(remaining[0].title).toBe('Group 2');
  });
});
